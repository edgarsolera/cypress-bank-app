package com.server.cypressbankapp.account;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class AccountService {
    private AccountRepository accountRepository;

    public List<Account> getAllAccounts(){
        return accountRepository.findAll();
    }

    public boolean insertAccount(Account account){
        Optional<Account> accountNumber = accountRepository.findByNumberAccount(account.getNumberAccount());
        if (accountNumber.isPresent()) {
            return false;
        }else {
            accountRepository.save(account);
            return true;
        }
    }

    public boolean deleteAccount(String id){
        Optional<Account> accountId = accountRepository.findBy_id(id);
        if (accountId.isPresent()) {
            accountRepository.deleteById(id);
            return true;
        }else {
            return false;
        }
    }
}
