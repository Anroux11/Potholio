# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY package.json ./
# RUN yarn install --frozen-lockfile
# COPY . .
# RUN yarn build
# FROM node:18-alpine
# WORKDIR /app
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json
# ENV NODE_ENV=production
# EXPOSE 3000
# CMD ["yarn", "start"]

# Step 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
# Step 2: Run the app
FROM node:18-alpine AS runner
WORKDIR /src/app
# Copy only necessary files
COPY --from=builder /src/app/public ./public
COPY --from=builder /src/app/.next ./.next
COPY --from=builder /src/app/node_modules ./node_modules
COPY --from=builder /src/app/package.json ./package.json
# Set environment variables (optional)
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]