package br.com.unisinos.frontend.payway.repository;

import br.com.unisinos.frontend.payway.domain.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {

    List<Bill> findByEmail(String email);

    @Transactional
    @Modifying
    @Query(value = "UPDATE bill SET is_pay = :isPay WHERE email = :email AND title = :title", nativeQuery = true)
    void updateIsPayByEmailAndTitle(@Param("email") String email,@Param("title")String title ,@Param("isPay") Boolean isPay);
}
