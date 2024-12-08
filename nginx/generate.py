import os

def main():
    server_name = os.environ['SERVER_NAME']
    server_port = os.environ['SERVER_PORT']
    config = f"""
        server {{
            listen 80;
            listen [::]:80;
            server_name {server_name};

            location / {{
                return 301 https://$host$request_uri;
            }}

            location ~ /.well-known/acme-challenge {{
                allow all;
                root /tmp/acme_challenge;
            }}
        }}

        server {{
            listen 443 ssl;
            listen [::]:443 ssl http2;
            server_name {server_name};
            ssl_certificate /etc/letsencrypt/live/{server_name}/fullchain.pem;
            ssl_certificate_key /etc/letsencrypt/live/{server_name}/privkey.pem;

            location / {{
                proxy_pass http://localhost:{server_port};
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
            }}
        }}
        """
    print(config)

if __name__ == '__main__':
    main()