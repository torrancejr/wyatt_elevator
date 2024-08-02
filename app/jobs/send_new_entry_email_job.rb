class SendNewEntryEmailJob < ApplicationJob
  queue_as :default

  def perform(*args)
    binding.pry
    UserMailer.new_entry_email(entry).deliver_now
  end
end
