package com.server.cypressbankapp.account;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<String> addAccount(@RequestBody Account account) {
        boolean accountSavedSuccess = accountService.insertAccount(account);
        if (accountSavedSuccess) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("{\"message\":\"Account Saved successfully\"}");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\":\"The account already exist\"}");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAccount(@PathVariable("id") String id){
        boolean accountDeletedSuccess = accountService.deleteAccount(id);
        if (accountDeletedSuccess) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("{\"message\":\"Account Deleted successfully\"}");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\":\"The account doesnt exist\"}");
        }
    }

}
