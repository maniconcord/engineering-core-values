package com.example.interfacesegregation.mobprogramming.solution;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class OnlinePaymentImplTest {
    @Test
    void payOnline(){
        //arrange
        OnlinePaymentImpl given = new OnlinePaymentImpl("6.99");

        //act
        String when = given.payOnline();

        //assert
        assertTrue(when.contains("6.99"));
    }
}
