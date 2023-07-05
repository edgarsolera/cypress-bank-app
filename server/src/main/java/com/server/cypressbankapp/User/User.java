package com.server.cypressbankapp.User;

public class User {
    private final String _id;

    private final String name;

    private final String lastname;
    private final String email;

    private final String password;

    public String getName() {
        return name;
    }

    public String getLastname() {
        return lastname;
    }

    public User(String _id, String email, String name, String lastname, String password) {
        this._id = _id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
    public String getEmail() {
        return email;
    }

    public String get_id() {
        return _id;
    }

    public String getPassword() {
        return password;
    }
}
