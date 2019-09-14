# README

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
### Association
- has_many :messages
- has_mane :users, through: :groups_users

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false|
|email|string|null:false, add_index :users, :email, unique: true|
### Association
- has_many :messages
- has_many :groups, through: :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|string||
|image|string||
|group_id|integer|null:false, foreign_key: true|
|user_id|integer|null:false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null:false, foreign_key: true|
|user_id|integer|null:false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
