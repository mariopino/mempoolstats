# Ethereum mempool stats



## Install

### Dependencies

In Ubuntu 22.04 server you can do:

```
apt update && apt upgrade -y && apt auto-remove -y
apt install -y git build-essential ca-certificates curl gnupg lsb-release libpq-dev

# docker
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# docker-compose
mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-x86_64  -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# node v16
curl -fsSL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt install nodejs

# yarn
npm install --global yarn
```

### Mono repo

Clone repository and install js dependencies:

```
cd /usr/local/
git clone https://github.com/mariopino/mempoolstats.git
cd mempoolstats
yarn
```

### Backend

```
yarn workspace backend docker:run
```

That will build and start all the required dockers:

- PostgreSQL
- Hasura GraphQL server
- Node.js crawler

### Hasura console

After that you can access to Hasura console at http://server_ip_address:8082 and login as admin using the password you previously set in `HASURA_GRAPHQL_ADMIN_SECRET` environment variable.