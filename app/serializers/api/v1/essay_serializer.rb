class Api::V1::EssaySerializer < ActiveModel::Serializer
  attributes :author, :body, :slug, :title
end
