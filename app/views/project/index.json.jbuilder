@projects.map do |project|
  json.set! project.id do
    json.partial! 'project/project', project: project
  end
end