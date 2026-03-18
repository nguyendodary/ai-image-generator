# Git Setup Commands

# 1. Khởi tạo repo
git init

# 2. Thêm remote
git remote add origin https://github.com/nguyendodary/ai-image-generator.git

# 3. Tạo .gitignore
echo "node_modules/
.env
dist/
build/
*.log
.DS_Store" > .gitignore

# 4. Add tất cả file
git add .

# 5. Commit đầu tiên
git commit -m "Initial commit: AI Image Generator with HuggingFace API"

# 6. Push lên GitHub
git branch -M main
git push -u origin main
