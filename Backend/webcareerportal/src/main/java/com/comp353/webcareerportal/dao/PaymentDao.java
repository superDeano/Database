package com.comp353.webcareerportal.dao;

import com.comp353.webcareerportal.models.CheckingAccount;
import com.comp353.webcareerportal.models.CreditCard;
import com.comp353.webcareerportal.models.Payment;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentDao extends JpaRepository<Payment, Long> {

    @Query(nativeQuery = true, value = "select * from CheckingAccount ca where ca.employer = :id or ca.jobSeeker = :id")
    List<CheckingAccount> getAllCheckingAccountsFromUser(@Value("id")String id);

    @Query(nativeQuery = true, value = "select * from CreditCard cc where cc.employer = :id or cc.jobSeeker = :id")
    List<CreditCard> getAllCreditCardsFromUser(@Value("id")String id);
}
