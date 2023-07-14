package com.server.cypressbankapp.account;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AccountRepository extends MongoRepository<Account, String> {
    Optional<Account> findByNumberAccount(String numberAccount);
    Optional<Account> findBy_id(String id);
}
