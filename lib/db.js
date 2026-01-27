
const username = encodeURIComponent(process.env.MONGO_USERNAME);
const password = encodeURIComponent(process.env.MONGO_PASSWORD);

export const connection="mongodb+srv://"+username+":"+password+"@cluster0.wi1khcn.mongodb.net/restoDB?appName=Cluster0"