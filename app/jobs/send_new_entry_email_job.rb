class SendNewEntryEmailJob < ApplicationJob
  queue_as :default

  def perform(*args)
    UserMailer.new_entry_email(entry).deliver_now
  end
end
