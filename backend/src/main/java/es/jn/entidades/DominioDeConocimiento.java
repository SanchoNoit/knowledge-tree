package es.jn.entidades;

import java.util.ArrayList;
import java.util.Collection;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Dominios")
public class DominioDeConocimiento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;
	private String nombre;
	private String descripcion;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = AreaDeConocimiento.class, mappedBy = "dominio")
	private Collection<AreaDeConocimiento> areas = new ArrayList<>();

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Collection<AreaDeConocimiento> getAreas() {
		return areas;
	}

	public void setAreas(Collection<AreaDeConocimiento> areas) {
		this.areas = areas;
	}

}