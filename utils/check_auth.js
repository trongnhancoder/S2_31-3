// Các middleware xác thực và phân quyền

// Kiểm tra user đã đăng nhập
const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Yêu cầu đăng nhập" });
  }
  next();
};

// Kiểm tra quyền admin
const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: "Yêu cầu quyền admin" });
  }
  next();
};

// Kiểm tra quyền mod hoặc admin
const isMod = (req, res, next) => {
  if (!req.user || (req.user.role !== 'mod' && req.user.role !== 'admin')) {
    return res.status(403).json({ message: "Yêu cầu quyền mod hoặc admin" });
  }
  next();
};

module.exports = { isAuthenticated, isAdmin, isMod }; 