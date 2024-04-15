# frozen_string_literal: true

class CardComponent < ViewComponent::Base
  attr_reader :title

  def initialize(title:)
    @title = title
  end

  def render?
    title.present?
  end
end
