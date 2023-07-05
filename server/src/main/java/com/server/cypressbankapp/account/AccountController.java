package com.server.cypressbankapp.account;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/account")


public class AccountController {
    private final AccountService accountService;


    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping
    public List<Account> fetchAllStudents(){
        return accountService.getAllAccounts();
    }

    @PostMapping("/insert")
    public void addAccount(@RequestBody Account account) {
        accountService.insertAccount(account);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAccount(@PathVariable("id") String id){
        accountService.deleteAccount(id);
    }

}
