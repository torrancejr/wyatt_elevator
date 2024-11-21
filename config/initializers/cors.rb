Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins `<%= ENV['BASE_URL']%>`# la
    # origins '*'
    resource '*',
             headers: :any,
             methods: %i[get post put patch delete options head],
             expose: [:Authorization]
  end
end