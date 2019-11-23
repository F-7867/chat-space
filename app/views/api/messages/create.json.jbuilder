json.array! @messages do |message|
    json.(@message, :content, :image)
    json.datetime @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
    json.user_name @message.user.name
    json.id @message.id
end