from django.core.management.base import BaseCommand
from django.conf import settings
from djongo import models
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Connect to MongoDB
        client = MongoClient('mongodb://localhost:27017')
        db = client['octofit_db']

        # Drop collections if they exist
        db.users.drop()
        db.teams.drop()
        db.activities.drop()
        db.leaderboard.drop()
        db.workouts.drop()

        # Create unique index on email for users
        db.users.create_index('email', unique=True)

        # Sample data
        marvel_team = {
            'name': 'Team Marvel',
            'members': ['Iron Man', 'Captain America', 'Thor', 'Hulk']
        }
        dc_team = {
            'name': 'Team DC',
            'members': ['Superman', 'Batman', 'Wonder Woman', 'Flash']
        }
        users = [
            {'name': 'Iron Man', 'email': 'ironman@marvel.com', 'team': 'Team Marvel'},
            {'name': 'Captain America', 'email': 'cap@marvel.com', 'team': 'Team Marvel'},
            {'name': 'Thor', 'email': 'thor@marvel.com', 'team': 'Team Marvel'},
            {'name': 'Hulk', 'email': 'hulk@marvel.com', 'team': 'Team Marvel'},
            {'name': 'Superman', 'email': 'superman@dc.com', 'team': 'Team DC'},
            {'name': 'Batman', 'email': 'batman@dc.com', 'team': 'Team DC'},
            {'name': 'Wonder Woman', 'email': 'wonderwoman@dc.com', 'team': 'Team DC'},
            {'name': 'Flash', 'email': 'flash@dc.com', 'team': 'Team DC'},
        ]
        activities = [
            {'user': 'Iron Man', 'activity': 'Running', 'duration': 30},
            {'user': 'Superman', 'activity': 'Flying', 'duration': 60},
            {'user': 'Batman', 'activity': 'Cycling', 'duration': 45},
            {'user': 'Wonder Woman', 'activity': 'Swimming', 'duration': 50},
        ]
        leaderboard = [
            {'team': 'Team Marvel', 'points': 120},
            {'team': 'Team DC', 'points': 110},
        ]
        workouts = [
            {'name': 'Morning Cardio', 'suggested_for': 'All'},
            {'name': 'Strength Training', 'suggested_for': 'Team Marvel'},
            {'name': 'Agility Drills', 'suggested_for': 'Team DC'},
        ]

        # Insert data
        db.teams.insert_many([marvel_team, dc_team])
        db.users.insert_many(users)
        db.activities.insert_many(activities)
        db.leaderboard.insert_many(leaderboard)
        db.workouts.insert_many(workouts)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
