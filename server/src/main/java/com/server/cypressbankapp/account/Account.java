package com.server.cypressbankapp.account;

public class Account {
    private String _id;
    private String numberAccount;
    private String name;

    public Account(String _id, String numberAccount, String name) {
        this._id = _id;
        this.numberAccount = numberAccount;
        this.name = name;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getNumberAccount() {
        return numberAccount;
    }

    public void setNumberAccount(String numberAccount) {
        this.numberAccount = numberAccount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
