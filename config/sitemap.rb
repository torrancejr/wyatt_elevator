# Set the host name for URL creation
  require 'rubygems'
  require 'sitemap_generator'

  SitemapGenerator::Sitemap.default_host = 'http://www.wyattelevator.com'
  SitemapGenerator::Sitemap.create do
    add '/elevator-services', :changefreq => 'weekly', :priority => 0.9
    add '/contact_us', :changefreq => 'weekly'
    add '/wyatt-elevator-success', :changefreq => 'weekly'
    add '/elevator-suppliers', :changefreq => 'weekly'
    add '/contact-us', :changefreq => 'weekly'
    add '/elevator-service-area', :changefreq => 'weekly'

  end
  SitemapGenerator::Sitemap.ping_search_engines # Not needed if you use the rake tasks
