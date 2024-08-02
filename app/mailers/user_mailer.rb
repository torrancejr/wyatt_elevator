class UserMailer < ApplicationMailer

  def new_entry_email(entry)
    @entry = entry
    mail(to: ["brittany.killion@wyattelevator.com", "torrance.jr@gmail.com"], subject: 'New Inquiry Submitted')
  end
end
