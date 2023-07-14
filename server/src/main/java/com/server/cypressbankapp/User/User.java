package com.server.cypressbankapp.User;

import jakarta.validation.constraints.Email;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "user")
public class User {

    @Id
    private ObjectId _id;

    private final String name;

    private final String surname;
    @Email(message = "Invalid email format")
    private final String email;

    private String password;

    public User(ObjectId _id, String email, String name, String surname, String password) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public String getLastname() {
        return surname;
    }
    public String getEmail() {
        return email;
    }

    public ObjectId get_id() {
        return _id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
