package com.example.interfacesegregation.mobprogramming.solution;

import org.junit.Test;;

import static org.junit.Assert.assertTrue;

public class InPersonPaymentImplTest {
    @Test
    public void payInPerson() {
        //arrange
        InPersonPaymentImpl given = new InPersonPaymentImpl("9.99");

        //act
        String when = given.payInPerson();

        //assert
        assertTrue(when.contains("9.99"));
    }
}
