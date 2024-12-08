import sys

def main():
    server_name = sys.argv[1]
    server_port = sys.argv[2]
    ssl_enabled = len(sys.argv) > 3 and sys.argv[3] == 'true'

    proxy = f"""
    location / {{
                    proxy_pass http://server:{server_port};
                    proxy_set_header Host $host;
                    proxy_set_header X-Real-IP $remote_addr;
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header X-Forwarded-Proto $scheme;
                }}
    """

    if ssl_enabled:
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

                {proxy}
            }}
            """
    else:
        config = f"""
        server {{
            listen 80;
            listen [::]:80;
            server_name {server_name};

            {proxy}

            location ~ /.well-known/acme-challenge {{
                allow all;
                root /tmp/acme_challenge;
            }}
        }}
        """

    print(config)

if __name__ == '__main__':
    main()
