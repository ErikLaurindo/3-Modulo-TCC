package com.belval.maniadepets.model;
import java.util.Objects;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "Agen_Vis")
public class AgenVis {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "Agen_Id")
  private Integer agenId;
  @Column(name = "Agen_Tipo")
  private String agenTipo;
  @Column(name = "agen_data_agen") // Mantendo o nome da coluna como 'agen_data_agen'
  private String agenDataAgen;
  @Column(name = "Pet_Id") // Ajustando para refletir a coluna petId na tabela
  private Integer petId;
  // Construtores
  public AgenVis() {}
  public AgenVis(Integer agenId, String agenTipo, String agenDataAgen, Integer petId) {
     this.agenId = agenId;
     this.agenTipo = agenTipo;
     this.agenDataAgen = agenDataAgen;
     this.petId = petId;
  }
  // Getters e Setters
  public Integer getAgenId() {
     return agenId;
  }
  public void setAgenId(Integer agenId) {
     this.agenId = agenId;
  }
  public String getAgenTipo() {
     return agenTipo;
  }
  public void setAgenTipo(String agenTipo) {
     this.agenTipo = agenTipo;
  }
  public String getAgenDataAgen() {
     return agenDataAgen;
  }
  public void setAgenDataAgen(String agenDataAgen) {
     this.agenDataAgen = agenDataAgen;
  }
  public Integer getPetId() {
     return petId;
  }
  public void setPetId(Integer petId) {
     this.petId = petId;
  }
  // Métodos hashCode, equals e toString
  @Override
  public int hashCode() {
     return Objects.hash(agenId, agenTipo, agenDataAgen, petId);
  }
  @Override
  public boolean equals(Object obj) {
     if (this == obj)
        return true;
     if (obj == null || getClass() != obj.getClass())
        return false;
     AgenVis other = (AgenVis) obj;
     return Objects.equals(agenId, other.agenId) &&
            Objects.equals(agenTipo, other.agenTipo) &&
            Objects.equals(agenDataAgen, other.agenDataAgen) &&
            Objects.equals(petId, other.petId);
  }
  @Override
  public String toString() {
     return "AgenVis [agenId=" + agenId + ", agenTipo=" + agenTipo +
            ", agenDataAgen=" + agenDataAgen + ", petId=" + petId + "]";
  }
public Object getInfoPet() {
	// TODO Auto-generated method stub
	return null;
}
public void setInfoPet(Object infoPet) {
	// TODO Auto-generated method stub
	
}
}