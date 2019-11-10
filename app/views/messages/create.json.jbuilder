json.content @message.content
json.id @message.id
json.image @message.image.url
json.user_id @message.user_id
json.group_id @message.group_id
json.datetime @message.created_at.strftime("%Y/%m/%d(%a) %H:%M")
json.user_name @message.user.name