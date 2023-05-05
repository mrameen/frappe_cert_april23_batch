## Gym Management

Gym Management System

#### License

MIT

all doctype related customer insert role customer
after add new user at user list, auto insert a gym member (server script)
after subscribed plan , auto insert a membership set 1 month start end date and redirect to page /thankyou (rest.py)
if membership already exist and Active, system will update membership with current plan
before insert a membership, this system check either this user already active or not in Gym Trainer Child
in Gym Trainer, we can see membership subscribed their plan


Gym Trainer Child under Gym Trainer read only, auto add when member subscribed plan (rest.py)

Gym Subscription Plan:
-filter Applied for plan_name (gym_subscription_plan.js)

Gym Professional Trainer Plan:
-filter Applied for plan_name (gym_professional_trainer_plan.js)

Gym Membership: 
-role customer cannot write
-locker max 2 only
-select locker auto hide if already selected
-last_date in Gym Locker not showing true datetime, in mysql is true
-before_insert set random no (.py)

Gym Trainer:
-can give rating to trainer
-Gym Trainer Child, can see membership user subscribed

Gym Fitness Profile:
-client script - auto calculate BMI,set dateupdated, calculate total burned calories using API

User:
-client script - auto insert gym member


