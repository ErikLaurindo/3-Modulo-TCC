
	package com.belval.maniadepets.model;

import java.util.Objects;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Info_Pet")
public class InfoPet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Pet_Id")
    private Integer petId;

    @Column(name = "Inf_Especie")
    private String infEspecie;

    @Column(name = "Inf_Raca")
    private String infRaca;

    @Column(name = "Inf_Cor")
    private String infCor;

    @Column(name = "Inf_DataNasc")
    private String infDataNasc;

    @Column(name = "Inf_Peso")
    private String infPeso;

    @OneToOne
    private User user;

    // Métodos construtores, getters, setters, hashCode, equals e toString...

    public InfoPet() {}

    public InfoPet(Integer petId, String infEspecie, String infRaca, String infCor, String infDataNasc, String infPeso, User user) {
        this.petId = petId;
        this.infEspecie = infEspecie;
        this.infRaca = infRaca;
        this.infCor = infCor;
        this.infDataNasc = infDataNasc;
        this.infPeso = infPeso;
        this.user = user;
    }

    // Getters e Setters...

    @Override
    public int hashCode() {
        return Objects.hash(petId, infCor, infDataNasc, infEspecie, infPeso, infRaca);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        InfoPet other = (InfoPet) obj;
        return Objects.equals(petId, other.petId) && Objects.equals(infCor, other.infCor) &&
               Objects.equals(infDataNasc, other.infDataNasc) && Objects.equals(infEspecie, other.infEspecie) &&
               Objects.equals(infPeso, other.infPeso) && Objects.equals(infRaca, other.infRaca);
    }

    @Override
    public String toString() {
        return "InfoPet [petId=" + petId + ", infEspecie=" + infEspecie + ", infRaca=" + infRaca + ", infCor=" + infCor +
               ", infDataNasc=" + infDataNasc + ", infPeso=" + infPeso + "]";
    }
}
	/*@OneToOne
	private User user;*/
	
