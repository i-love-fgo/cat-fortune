## userテーブル
| Column               | Type     | Options                   |
| -------------------- | -------- | ------------------------- |
| nickname             | string   | null: false               |
| email                | string   | null: false, unique: true |
| encrypted_password   | string   | null: false               |
| favorite_cat         | string   | null:false                |

## Associations
- has_many :fortunes
- has_many :comments

## commentsテーブル
| Column      | Type         | Options                        |
| ----------- | ------------ | ------------------------------ |
| user        | references   | null: false, foreign-key: true |
| fortune     | references   | null: false, foreign-key: true |

## Associations
- belongs_to :user
- belongs_to :fortune

## fortunesテーブル
| Column        | 