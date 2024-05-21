provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "ShopifyAppServer"
  }
}

output "instance_ip" {
  value = aws_instance.app_server.public_ip
}
