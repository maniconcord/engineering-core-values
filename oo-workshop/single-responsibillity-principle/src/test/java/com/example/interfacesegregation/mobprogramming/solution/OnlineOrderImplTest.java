package com.example.interfacesegregation.mobprogramming.solution;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class OnlineOrderImplTest {
    @Test
    void acceptOnlineOrder(){
        //arrange
        OnlineOrderImpl given = new OnlineOrderImpl("Brandon Gilbert", "Salad");

        //act
        String when = given.acceptOnlineOrder();

        //assert
        assertTrue(when.contains("Brandon Gilbert"));
        assertTrue(when.contains("Salad"));
    }
}
