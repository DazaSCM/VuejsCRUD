class User < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_secure_password
  has_one_attached :image
  acts_as_paranoid

  def image_url
    #Get the URL of the associated image
    image.attached? ? url_for(image) : nil
  end
end
