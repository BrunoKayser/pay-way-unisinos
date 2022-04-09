package br.com.unisinos.frontend.payway.domain;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ListBill {
    private List<Bill> bills = new ArrayList<>();

}
