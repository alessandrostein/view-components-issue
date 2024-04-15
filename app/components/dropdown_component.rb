# frozen_string_literal: true

class DropdownComponent < ViewComponent::Base
  renders_one :header
  renders_one :body
  renders_one :footer

  attr_reader :label

  def initialize(label:)
    @label = label
  end
end
