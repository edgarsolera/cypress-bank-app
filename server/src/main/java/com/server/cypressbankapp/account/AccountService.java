package com.server.cypressbankapp.account;

import com.server.cypressbankapp.User.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class AccountService {
    private AccountRepository accountRepository;

    public List<Account> getAllAccounts(){
        return accountRepository.findAll();
    }

    public Account insertAccount(Account account){
        return accountRepository.save(account);
    }

    public void deleteAccount(String id){
        accountRepository.deleteById(id);
    }

}
