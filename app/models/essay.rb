class Essay < ApplicationRecord
  before_create :generate_slug

  enum author: { unattributed: 0, four_skew: 1 }

  validates_presence_of :author, :body, :publication_date, :slug, :title
  validates_uniqueness_of :slug, :title

  def generate_slug
    self.slug ||= title.parameterize
  end

  def to_param
    slug
  end
end
