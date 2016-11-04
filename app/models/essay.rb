class Essay < ApplicationRecord
  before_validation :generate_slug

  validates_presence_of :author, :body, :publication_date, :slug, :title
  validates_uniqueness_of :slug, :title

  protected

  def generate_slug
    self.slug ||= title.parameterize
  end

  def to_param
    slug
  end
end
