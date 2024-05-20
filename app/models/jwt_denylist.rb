class JwtDenylist < ApplicationRecord
  # include Devise::JWT::RevocationStrategies::Blacklist # before
  include Devise::JWT::RevocationStrategies::Denylist
end
