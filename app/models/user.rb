class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }

  after_initialize :set_default_role, if: :new_record?

  def set_default_role
    self.is_admin ||= false
  end

end
