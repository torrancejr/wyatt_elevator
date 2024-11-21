class UserMailer < ApplicationMailer

  def new_entry_email(entry)
    @entry = entry
    mail(to: ["kari.mackley@wyattelevator.com", "info@wyattelevator.com", "torrance.jr@gmail.com"], subject: 'New Inquiry Submitted')
  end
end
