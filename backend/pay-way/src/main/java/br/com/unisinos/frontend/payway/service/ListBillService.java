package br.com.unisinos.frontend.payway.service;

import br.com.unisinos.frontend.payway.domain.ListBill;
import br.com.unisinos.frontend.payway.repository.BillRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static java.util.Objects.nonNull;

@Slf4j
@Service
public class ListBillService {

    @Autowired
    private BillRepository billRepository;

    public ListBill listar(String email) {
        ListBill listBill = ListBill.builder().build();
        try {
            listBill = ListBill.builder()
                    .bills(billRepository.findByEmail(email))
                    .build();
            log.info("==========Listou contas do usuário(a): {}", email);
        } catch(Exception e) {
            log.error("Erro ao listar contas do {}", email, e);
        }
        return listBill;
    }

}
