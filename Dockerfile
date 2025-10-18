# --- STAGE 1: Build ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
# Debug: show what's in dist
RUN ls -la /app/dist/assets || echo "No assets folder"

# --- STAGE 2: Serve ---
FROM nginx:stable-alpine
# Remove default nginx config
RUN rm -f /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/*.conf
# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html
# Copy our nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Debug: List what we copied
RUN echo "=== Contents of /usr/share/nginx/html ===" && \
    ls -la /usr/share/nginx/html && \
    echo "=== Contents of /usr/share/nginx/html/assets ===" && \
    ls -la /usr/share/nginx/html/assets 2>/dev/null || echo "No assets folder!"
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
