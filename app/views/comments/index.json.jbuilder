@comments.map do |comment|
  json.set! comment.id do
    json.partial! 'comments/comment', comment: comment
  end
end