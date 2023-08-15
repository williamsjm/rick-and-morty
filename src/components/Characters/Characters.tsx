import React, { useState } from "react";
import useRickMortyCharacters from "../../../hooks/useRickMortyCharacters";
import { Avatar, List, Spin, Select, Modal } from "antd";

import { Container, SpinerContainer, WelcomeText } from "./Characters.styles";
import { useTranslation } from "react-i18next";

const Characters: React.FC = () => {
  const { characters, isLoading, error } = useRickMortyCharacters();
  const [statusFilter, setStatusFilter] = useState(null);
  const position = "bottom";
  const align = "center";
  const { i18n } = useTranslation();
  const filteredCharacters = characters.filter((character) =>
    statusFilter ? character.status === statusFilter : true
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const showCharacterDetail = (character) => {
    setSelectedCharacter(character);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedCharacter(null);
  };

  if (isLoading)
    return (
      <SpinerContainer>
        <Spin />
      </SpinerContainer>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Container>
        <WelcomeText>{i18n.t("characters")}</WelcomeText>
        <Select
          style={{ width: 200 }}
          onChange={(value) => setStatusFilter(value)}
          placeholder={i18n.t("select_status")}
          allowClear
        >
          <Select.Option value="Alive">{i18n.t("alive")}</Select.Option>
          <Select.Option value="Dead">{i18n.t("dead")}</Select.Option>
          <Select.Option value="unknown">{i18n.t("unknown")}</Select.Option>
        </Select>

        <List
          pagination={{ position, align }}
          dataSource={filteredCharacters}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={
                  <a onClick={() => showCharacterDetail(item)}>{item.name}</a>
                }
                description={
                  item.status === "Alive" ? i18n.t("alive") : i18n.t("unknown")
                }
              />
            </List.Item>
          )}
        />
        <Modal
          title={selectedCharacter?.name}
          visible={isModalVisible}
          onCancel={closeModal}
          footer={null}
        >
          {selectedCharacter && (
            <div>
              <Avatar size={64} src={selectedCharacter.image} />
              <h3>{selectedCharacter.name}</h3>
              <p>
                <strong>{i18n.t("status")}</strong>: {selectedCharacter.status}
              </p>
              <p>
                <strong>{i18n.t("species")}</strong>:{" "}
                {selectedCharacter.species === "Human"
                  ? i18n.t("human")
                  : i18n.t("alien")}
              </p>
              <p>
                <strong>{i18n.t("gender")}</strong>:{" "}
                {selectedCharacter.gender === "Male"
                  ? i18n.t("male")
                  : i18n.t("female")}
              </p>
              <p>
                <strong>{i18n.t("location")}</strong>:{" "}
                {selectedCharacter.location.name}
              </p>
            </div>
          )}
        </Modal>
      </Container>
    </div>
  );
};
export default Characters;
