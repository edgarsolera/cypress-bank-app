package com.server.cypressbankapp.User;

public class User {
    private final String _id;
    private final String userName;

    private final String password;

    public User(String _id, String userName, String password) {
        this._id = _id;
        this.userName = userName;
        this.password = password;
    }

    public String getUserId() {
        return _id;
    }

    public String getUserName() {
        return userName;
    }
}
