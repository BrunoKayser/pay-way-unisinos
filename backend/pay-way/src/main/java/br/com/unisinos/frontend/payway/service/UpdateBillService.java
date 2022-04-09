package br.com.unisinos.frontend.payway.service;

import br.com.unisinos.frontend.payway.domain.Bill;
import br.com.unisinos.frontend.payway.repository.BillRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UpdateBillService {

    @Autowired
    private BillRepository billRepository;

    public Boolean updateIsPayByEmailAndTitle(Bill billUpdate){
        Boolean isUpdated;
        try {
            billRepository.updateIsPayByEmailAndTitle(billUpdate.getEmail(), billUpdate.getTitle(), billUpdate.getIsPay());
            isUpdated = Boolean.TRUE;
            log.info("Atualizou dados do usuário(a): {}", billUpdate.getEmail());
        } catch(Exception e) {
            log.error("Erro ao atualizar o isPay da Conta {}", billUpdate.getEmail(), e);
            isUpdated = Boolean.FALSE;
        }
        return isUpdated;
    }
}
