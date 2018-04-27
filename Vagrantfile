# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/trusty64"
 

  # old static config
  # config.vm.network :private_network, ip: "192.168.68.8"
  # config.vm.network :private_network, type: "dhcp"

  #config.vm.provider :virtualbox do |vb|
    #vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    #vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
  #end

  # Forward mongo ports 
  config.vm.network :forwarded_port, guest: 27017, host: 27017

  # forwards our hosted http on 8080
  config.vm.network :forwarded_port, guest: 8080, host: 8080
  

  
  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update 
    # sudo apt-get install nodejs-legacy
    # sudo apt-get install npm 

    sudo apt-get install -y g++

    # Using Ubuntu
    curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y mongodb   
    sudo apt-get install -y git
	
	  # probably add grunt-cli, nodemon to this they need to be global
	  sudo npm install grunt-cli -g 
	  sudo npm install nodemon -g 

    sudo npm install -g @angular/cli
    
  SHELL
end
